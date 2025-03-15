import facebook from "../assets/facebook.png"
import linked from "../assets/linked.png"
import twiter from "../assets/twiter.png"
import insta from "../assets/insta.png"

const Footer = () => {
    return (
        <footer className="  p-10 grid grid-cols-3 text-center gap-5 bg-gray-400 text-white">
        <div className="space-y-8">
        <h4 className="text-xl uppercase">Useful Link</h4>
          
          <div className="space-y-1">
          <p><a href="/">About</a></p>
        <p> <a href="/">Services</a></p>
       <p><a href="/">Contact</a></p>
        <p><a href="/">Shop</a></p>
        <p><a href="/">Blog</a></p>
          </div>
        
        </div>
        <div className="space-y-8">
        <h4 className="text-xl uppercase">NEWSLETTER</h4>
          <form>
          <input type="text" className=" w-[300px] h-[40px] bg-white"/>
          </form>
        <button className="px-10 border-2 rounded-xl py-2 font-bold text-md   ">Subscribe Now</button>
        </div>
        <div className="space-y-8">
          <h4 className="text-xl uppercase"> Contact </h4>
          <div className="space-y-1">
          <p> Academy road ,Feni sadar ,Feni ,Chattogram ,Bangladesh</p>
          <div className="flex justify-center items-center gap-5">
            <img className="w-8 h-8" src={facebook} alt="Fecebook"/>
            <img className="w-8 h-8" src={linked} alt="Linkedin"/>
            <img className="w-8 h-8"  src={twiter} alt="Twiter"/>
            <img className="w-8 h-8"  src={insta} alt="Instagram"/>

          </div>
          </div>
        </div>

       
       
      </footer>
    );
};

export default Footer;