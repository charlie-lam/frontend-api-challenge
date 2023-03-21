/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ChitterView = require('./chitterView')
const ChitterModel = require('../models/chitterModel')
const ChitterClient = require('../clients/chitterClient')



describe('View class unit testing', () => {
    it('Displays only the Login/Sign up Homepage when credentials in state are null', () => {

        document.body.innerHTML = fs.readFileSync('./index.html');

        jest.mock('./chitterModel', () => {
            return jest.fn().mockImplementation(() => {
              return {
                getCredentials: jest.fn().mockReturnValue({userId: null, sessionKey:null})
              };
            });
        });
        const mockModel = new ChitterModel();
        
        const view = new ChitterView(mockModel);

        view.displayPeeps();
        const result = document.querySelector('.peep');
        expect(result).toBe(null);
    });

    it('Displays the last 50 peeps if model has non null credentials', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      jest.mock('./chitterModel', () => {
          return jest.fn().mockImplementation(() => {
            return {
              getCredentials: jest.fn().mockReturnValue({userId: 34, sessionKey:"_2a_12_vQ2lli3iK6xrcl0SlKvZa_"})
            };
          });
      });


      jest.mock('./chitterClient', () => {
        return jest.fn().mockImplementation(() => {
          return {
            loadPeeps: jest.fn().mockReturnValue({userId: 34, sessionKey:"_2a_12_vQ2lli3iK6xrcl0SlKvZa_"})
          };
        });
    });
      const mockModel = new ChitterModel();
      const mockClient = new ChitterClient();
      
      const view = new ChitterView(mockModel, mockClient);

      view.displayPeeps();
      const result = document.querySelectorAll('.peep');
      expect(result.length).toEqual(50);
  });
});