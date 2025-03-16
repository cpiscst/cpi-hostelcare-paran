
import person1 from "../assets/person1.jpg"
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.jpg"
const memberData=[
    {
        image:person1,
        name:"Asadujjaman Asad",
        designation:"Hostel Director",
        contact:"01878524523"
    },
    {
        image:person2,
        name:"Yousuf Sir",
        designation:"Hostel Super",
        contact:"01878524523"
    },
    {
        image:person3,
        name:"Mehedi Hasan",
        designation:"Hostel Manager",
        contact:"01878524523"
    },
  

]
console.log(memberData)
const Member = () => {
    return (
        <div className='mt-10'>
        <h2 className='text-5xl font-bold text-center my-8'>Our Member</h2>
        <div className='flex justify-between gap-5'> 

            {
              memberData.map((item) => <div key={item.name} className='h-[350px] w-[300px]  bg-stone-100 border-2 rounded-xl'>
              <figure className='flex justify-center pt-1'>
                <img  className=" h-[190px]  " src={person1} alt="person1"/>
             
              </figure>
              <div className='p-6 text-center'>
              <h6 className='text-3xl font-semibold '> Asaduzzaman  asad </h6>
              <p>House Director</p>
              <p>01820241524</p>
              
            </div>
            </div>)
            }
            
            
           

           
        </div>
      </div>
    );
};

export default Member;