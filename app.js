new Vue({
	el: '#app',

	data: {
        ended: false, 
        punch: 100
        
    },

    methods: {
        punchAction() {
            this.punch -= 10;
            if(this.punch === 0){
                this.ended = true;
            } 

        }, 

        endGame() {
             this.ended = false;
             this.punch = 100;
        }

    }
    
});