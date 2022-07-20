export default{
    name:'navbar',
    data() {
        return {
            navbarphone:false
        }
    },
     methods: {
        showNavbarPhone(){
           (this.navbarphone==false) ? this.navbarphone=true : this.navbarphone=false;
        }
      },
      computed:{
        show(){
            return (this.navbarphone==false) ? true :false;
        }
      }

}