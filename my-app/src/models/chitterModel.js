class ChitterModel {
    constructor(){
      this.peeps = [];
      this.userId = null;
      this.sessionKey = null;  
    };

    getCredentials(){
        return {userId: this.userId, sessionKey: this.sessionKey}
    }

    
}

module.exports = ChitterModel;