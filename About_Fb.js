var About_fb = /** @class */ (function () {
    function About_fb(work, place_you_have_lived, contac_info, Family, life_event, Detalis_abou) {
        var _this = this;
        this.work = work;
        this.place_you_have_lived = place_you_have_lived;
        this.contac_info = contac_info;
        this.Family = Family;
        this.life_event = life_event;
        this.Detalis_abou = Detalis_abou;
        this.GetWoekName = function () {
            return _this.work;
        };
        this.Getplace = function () {
            return _this.place_you_have_lived;
        };
        this.setPlace = function (name) {
            _this.place_you_have_lived = name;
        };
        this.GetContac = function () {
            return _this.contac_info;
        };
        this.GetDetalis = function () {
            return _this.Detalis_abou;
        };
        this.GetFamily = function () {
            return _this.Family;
        };
        this.work = work;
        this.place_you_have_lived = place_you_have_lived;
        this.life_event = life_event;
        this.contac_info = contac_info;
        this.Detalis_abou = Detalis_abou;
        this.Family = Family;
    }
    return About_fb;
}());
var My_About = new About_fb(["j.b mobie", " l.p shavni ", "glory auto tec"], "surat gujart", [8734041371, "thayash901@gmail.com", "8/9/97", "male"], "single", ["Became a blood donor on Facebook", "comlete school from vks ", " graduted from ghandhy college"]);
console.log(My_About.GetWoekName() + "  wokr place ");
console.log(My_About.life_event + " life event ");
console.log(My_About.Getplace() + "   lived place before change ");
My_About.setPlace("vadodar");
console.log(My_About.Getplace() + "   lived place after change ");
console.log(My_About.GetFamily() + " about family");
console.log(My_About.GetDetalis() + " detalis");
console.log(My_About.GetContac() + "  contac");
