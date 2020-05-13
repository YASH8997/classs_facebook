class About_fb {
    constructor(private work:Array<string>, private place_you_have_lived:string , private contac_info:Array<any> , private Family:string , public life_event: Array<string>,private  Detalis_abou?:string ){
        this.work=work;
        this.place_you_have_lived=place_you_have_lived;
        this.life_event=life_event;
        this.contac_info=contac_info;
        this.Detalis_abou=Detalis_abou;
        this.Family=Family;
    }
    GetWoekName=()=>{
        return this.work
    }
    Getplace=()=>{
        return this.place_you_have_lived
    }
    setPlace = (name:string)=>{
        this.place_you_have_lived=name;
    }
    GetContac=()=>{
        return this.contac_info;
    }
    GetDetalis=()=>{
        return this.Detalis_abou
    }
    GetFamily= ()=>{
        return this.Family
    }
}
let My_About = new About_fb (["j.b mobie", " l.p shavni ", "glory auto tec"],"surat gujart", [8734041371,"thayash901@gmail.com","8/9/97","male"] ,"single" ,["Became a blood donor on Facebook","comlete school from vks " , " graduted from ghandhy college"] )
console.log(My_About.GetWoekName() +  "  wokr place ");
console.log(My_About.life_event + " life event ");
console.log(My_About.Getplace() + "   lived place before change ");
My_About.setPlace("vadodar");
console.log(My_About.Getplace() +"   lived place after change ");
console.log(My_About.GetFamily() + " about family");
console.log(My_About.GetDetalis()+" detalis");
console.log(My_About.GetContac()+"  contac");