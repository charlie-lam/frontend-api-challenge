class ChitterView {
    constructor(model, client){
        this.mainContainerEl = document.querySelector('#main-container');
        this.model = model;
        this.client = client;
    };

    async displayPeepsFromApi(){
        const credentials = this.model.getCredentials();
        if(credentials.sessionKey && credentials.userId){
            const loaded = await this.client.loadNotes();
            this.model.setPeeps();
            this.displayPeeps();
        }
    }
}

module.exports = ChitterView;