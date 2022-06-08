const resume = [
    {
        PersonalInfo:{
            Name:{
                FirstName:"Vinitha",
                LastName:".G",
                Age:25,
                FullName:this.FirstName+" "+this.LastName
            },
            Contact:{
                State:"Tamil Nadu",
                District:"Coimbatore",
                Address:`XYZ Street,${this.District},${this.State}`,
                Mail:"email@gmail.com",
                Mobile:"********79"
            },
            Education:{
                SSLC:"ABC School",
                HSC:"DEF  School",
                Institute:"XYZ Institute of Technology"
            },
            Languages:{ 
              Lang1:"Tamil",
              Lang2:"English"
            },
            Experience:{
                Internship:{
                    Company1:{
                        Name:"Pioneer steels",
                        Place:"Coimbatore",
                        State:"Tamil Nadu",
                    },
                    Company2:{
                        Name:"Akira controls",
                        Place:"Coimbatore",
                        State:"Tamil Nadu"
                    },
                    Interest:{
                        Interest_1:"Reading books",
                        Interest_2:"Writing",
                        Interest_3:"Cooking",
                        Interest_4:"Painting",
                     },
                     JobApplication:{
                         Role:"Full-Stack Developer"
                     },
                }
            }
         }


    }
]
console.log(resume);