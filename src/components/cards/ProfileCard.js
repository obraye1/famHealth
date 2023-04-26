import React, {useState} from 'react'
import {
    Button,
    Link,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
function ProfileCard() {
    const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
<div className="py-20 bg-gray-50 overflow-hidden">
    <div className="mx-auto w-full px-4 text-center space-y-8 text-indigo-600 md:px-15">
        <div>
            <span className="text-indigo-600 text-center text-lg font-semibold">Services Offered</span>
        </div>
        <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <img src="/images/tooth.png" className="w-10" width="512" height="512" alt="Dental"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-indigo-600 font-medium transition group-hover:text-indigo-950">Dental Services</h5>
                        <p className="text-sm text-gray-600">Experience exceptional dental care at our state-of-the-art hospital. Our team of skilled dentists and hygienists offer a wide range of services including cleanings, fillings, and implants. 
                        Enjoy a comfortable and relaxing environment while we provide top-quality care for your oral health. Book your appointment today!</p>
                    </div>
                    <a href="/" className="flex justify-between items-center group-hover:text-indigo-600">
                        
                    <Dialog open={open} handler={handleOpen} className="flex flex-row h-full items-center w-full ">
                    <img src="/images/dental.jpg" className="rounded-full p-6" width="612" height="612" alt="Dental"/>

        <DialogBody divider>
        <DialogHeader>                        <h5 className="text-xl text-indigo-600 font-medium transition group-hover:text-indigo-950">Dental Services</h5>
</DialogHeader>

        <div className="space-y-2">
                        <p className="text-xl text-gray-600">
                            At FamHealth, we believe that taking care of your dental health is crucial to maintaining a healthy lifestyle. Our experienced team of dental professionals is dedicated to providing you with the best possible care for your teeth and gums.

We offer a comprehensive range of dental services, from routine check-ups and cleanings to more advanced treatments such as fillings, extractions, and root canals. Our state-of-the-art facilities and equipment ensure that you receive the highest quality care possible.

Our team of dentists and dental hygienists are committed to educating our patients about the importance of oral hygiene and providing you with the tools and knowledge necessary to maintain a healthy smile. We offer personalized treatment plans tailored to meet your specific needs, taking into consideration your overall health, lifestyle, and dental history.

At FamHealth, we strive to make your dental experience as comfortable and stress-free as possible. We understand that going to the dentist can be intimidating, which is why we take the time to get to know our patients and address any concerns they may have.

We are dedicated to providing you and your family with the highest level of dental care possible. Visit us today to experience the FamHealth difference!
</p>
                    </div>
                    <DialogFooter>
          <Button
            variant="text"
            color="green"
            onClick={handleOpen}
            className="mr-1 bg-indigo-900"
          >
         <div class="group flex relative">
         <a href='/'>Back</a>  
                
    <span class="group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500  rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Go Back</span>
</div>     
            </Button>
          <Button
            variant="text"
            color="green"
            onClick={handleOpen}
            className="ml-1 bg-green-600"
          >
            <div class="group flex relative">
            <span className="mr-2">+</span>
                
    <span class="group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Book an appointment</span>
</div>
            
          </Button>
          
          
          
          
        </DialogFooter>
        </DialogBody>
       
      </Dialog>


                        <span type='button' onClick={handleOpen} className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <div class="group flex relative">
            <a href='/' className="mr-2">+</a>
                
    <span class="mt-0 group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Book an appointment</span>
</div>

</span>
                    </a>
                </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <img src="/images/heart.png" className="w-10" width="512" height="512" alt="Heart"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-indigo-600 font-medium transition group-hover:text-indigo-950">Heart Disease</h5>
                        <p className="text-sm text-gray-600">Trust our experienced team of cardiologists to provide the highest quality care for your heart. Our hospital is equipped with the latest technology and treatments to diagnose and manage heart disease. From lifestyle changes to advanced surgical procedures,
                         we offer comprehensive care tailored to your individual needs. Contact us to schedule your appointment today.</p>
                    </div>
                    <a href="/" className="flex justify-between items-center group-hover:text-indigo-600">

                    <Dialog open={open} handler={handleOpen} className="flex flex-row h-full items-center w-full ">
                    <img src="/images/heartat.jpg" className="rounded-full p-6" width="612" height="612" alt="Dental"/>

        <DialogBody divider>
        <DialogHeader>                        <h5 className="text-xl text-indigo-600 font-medium transition group-hover:text-indigo-950">Heart Disease Treatment</h5>
</DialogHeader>

        <div className="space-y-2">
                        <p className="text-xl text-gray-600">
                        At FamHealth, we understand that heart disease is a serious and often life-threatening condition that affects millions of people worldwide. That's why we are dedicated to providing comprehensive and compassionate care to patients with heart disease.

Our team of highly skilled and experienced cardiologists and cardiac surgeons utilize the latest technology and techniques to provide a range of heart disease services, from diagnosis and treatment to rehabilitation and prevention.

We offer a range of diagnostic tests, including ECG, echocardiography, stress tests, and cardiac catheterization, to accurately assess your heart function and identify any underlying conditions.

Our treatment options include medical management, minimally invasive procedures, and open-heart surgery, depending on the severity of your condition. We also offer cardiac rehabilitation programs to help you regain your strength and improve your heart health after surgery or a cardiac event.

At FamHealth, we understand that heart disease can be a stressful and overwhelming diagnosis, which is why we provide a supportive and compassionate environment to help you and your loved ones navigate this difficult time.

Our team of experts is committed to working closely with you to develop a personalized treatment plan that addresses your unique needs and goals. We are dedicated to helping you achieve optimal heart health and improving your overall quality of life.

If you or a loved one has been diagnosed with heart disease, we are here to help. Contact FamHealth today to schedule an appointment and take the first step towards a healthier heart.
</p>
                    </div>
                    <DialogFooter>
          <Button
            variant="text"
            color="green"
            onClick={handleOpen}
            className="mr-1 bg-indigo-900"
          >
         <div class="group flex relative">
         <a href='/'>Back</a>  
                
    <span class="group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500  rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Go Back</span>
</div>     
            </Button>
          <Button
            variant="text"
            color="green"
            onClick={handleOpen}
            className="ml-1 bg-green-600"
          >
            <div class="group flex relative">
            <span className="mr-2">+</span>
                
    <span class="group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Book an appointment</span>
</div>
            
          </Button>
          
          
          
          
        </DialogFooter>
        </DialogBody>
       
      </Dialog>
      <span type='button' onClick={handleOpen} className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <div class="group flex relative">
            <a href='/' className="mr-2">+</a>
                
    <span class="mt-0 group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Book an appointment</span>
</div>

</span>
                    </a>
                </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <img src="/images/emergency.png" className="w-10" width="512" height="512" alt="Emergency Care"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-indigo-600 font-medium transition group-hover:text-indigo-950">Emergency Care</h5>
                        <p className="text-sm text-gray-600">When every second counts, trust our hospital's experienced team to provide rapid and effective emergency heart care. 
                        Our state-of-the-art facility and specialized cardiac team offer round-the-clock care for heart attacks, strokes, and other life-threatening conditions. Don't wait, call 911 and request to be taken to our hospital for immediate treatment.</p>
                    </div>
                    <a href="/" className="flex justify-between items-center group-hover:text-indigo-600">

                    <Dialog open={open} handler={handleOpen} className="flex flex-row h-full items-center w-full ">
                    <img src="/images/emer.jpg" className="rounded-full p-6" width="612" height="612" alt="Dental"/>

        <DialogBody divider>
        <DialogHeader>                        <h5 className="text-xl text-indigo-600 font-medium transition group-hover:text-indigo-950">Emergency Services</h5>
</DialogHeader>

        <div className="space-y-2">
                        <p className="text-xl text-gray-600">
                        At FamHealth, we understand that emergencies can happen at any time and that quick and efficient care is crucial in these situations. That's why we are proud to offer top-notch emergency services to our patients.

Our emergency department is staffed by a team of highly skilled and experienced physicians, nurses, and support staff who are trained to handle a wide range of medical emergencies, from minor injuries to life-threatening conditions.

We are equipped with state-of-the-art technology and equipment to ensure that our patients receive the highest quality care possible. Our emergency department is open 24/7, so you can rest assured that we are always here when you need us.

At FamHealth, we understand that emergencies can be stressful and overwhelming, which is why we strive to provide a welcoming and supportive environment to help you and your loved ones through this difficult time. Our team is dedicated to working closely with you to ensure that you receive the care you need as quickly and efficiently as possible.

We offer a range of emergency services, including trauma care, cardiac care, stroke care, and pediatric emergencies. Our team is trained to handle a wide range of medical emergencies, so you can feel confident that you are in good hands.

If you or a loved one is experiencing a medical emergency, don't hesitate to contact FamHealth. We are here to provide you with the highest quality emergency care possible and help you on your path to recovery.
</p>
                    </div>
                    <DialogFooter>
          <Button
            variant="text"
            color="green"
            onClick={handleOpen}
            className="mr-1 bg-indigo-900"
          >
         <div class="group flex relative">
         <a href='/'>Back</a>  
                
    <span class="group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500  rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Go Back</span>
</div>     
            </Button>
          <Button
            variant="text"
            color="green"
            onClick={handleOpen}
            className="ml-1 bg-green-600"
          >
            <div class="group flex relative">
            <span className="mr-2">+</span>
                
    <span class="group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Book an appointment</span>
</div>
            
          </Button>
          
          
          
          
        </DialogFooter>
        </DialogBody>
       
      </Dialog>

      <span type='button' onClick={handleOpen} className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <div class="group flex relative">
            <a href='/' className="mr-2">+</a>
                
    <span class="mt-0 group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Book an appointment</span>
</div>

</span>
                    </a>
                </div>
            </div>
            <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <img src="/images/ophthalmology.png" className="w-10" width="512" height="512" alt="Ophthalmology"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-indigo-600 font-medium transition group-hover:text-indigo-600">Ophthalmology</h5>
                        <p className="text-sm text-gray-600">
                            Clear vision is essential for a fulfilling life, and we are here to help you achieve it. Our skilled ophthalmologists provide a wide range of services, from routine eye exams to complex surgeries. With the latest technology and personalized care,
                         we are committed to helping you maintain healthy eyesight. Schedule your appointment today.</p>
                    </div>
                    <a href="/" className="flex justify-between items-center group-hover:text-indigo-600">

                    <Dialog open={open} handler={handleOpen} className="flex flex-row h-full items-center w-full ">
                    <img src="/images/oph.jpg" className="rounded-full p-6" width="612" height="612" alt="Dental"/>

        <DialogBody divider>
        <DialogHeader>                        <h5 className="text-xl text-indigo-600 font-medium transition group-hover:text-indigo-950">Ophthalmology Services</h5>
</DialogHeader>

        <div className="space-y-2">
                        <p className="text-xl text-gray-600">
                        At FamHealth, we understand that your vision is one of your most valuable assets, which is why we are dedicated to providing you with top-notch ophthalmology services. Our team of experienced ophthalmologists, optometrists, and support staff are committed to helping you achieve optimal eye health and vision.

We offer a comprehensive range of ophthalmology services, including routine eye exams, contact lens fittings, and the diagnosis and treatment of eye diseases and conditions such as cataracts, glaucoma, and macular degeneration.

Our state-of-the-art facilities and equipment ensure that you receive the highest quality care possible. We utilize the latest technology and techniques to provide accurate diagnoses and effective treatments, from medications and eye drops to minimally invasive procedures and surgery.

At FamHealth, we understand that eye conditions and diseases can be stressful and overwhelming, which is why we provide a supportive and compassionate environment to help you and your loved ones navigate this difficult time. Our team of experts is committed to working closely with you to develop a personalized treatment plan that addresses your unique needs and goals.

We also offer education and guidance on maintaining optimal eye health and preventing eye diseases and conditions. Our team is dedicated to ensuring that you have the tools and knowledge necessary to protect your vision and maintain healthy eyes throughout your life.

If you are experiencing any issues with your vision or are due for a routine eye exam, contact FamHealth today to schedule an appointment. We are committed to providing you with the highest quality ophthalmology services possible and helping you maintain optimal eye health and vision.
</p>
                    </div>
                    <DialogFooter>
          <Button
            variant="text"
            color="green"
            onClick={handleOpen}
            className="mr-1 bg-indigo-900"
          >
         <div class="group flex relative">
         <a href='/'>Back</a>  
                
    <span class="group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500  rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Go Back</span>
</div>     
            </Button>
          <Button
            variant="text"
            color="green"
            onClick={handleOpen}
            className="ml-1 bg-green-600"
          >
            <div class="group flex relative">
            <span className="mr-2">+</span>
                
    <span class="group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Book an appointment</span>
</div>
            
          </Button>
          
          
          
          
        </DialogFooter>
        </DialogBody>
       
      </Dialog>

      <span type='button' onClick={handleOpen} className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <div class="group flex relative">
            <a href='/' className="mr-2">+</a>
                
    <span class="mt-0 group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Book an appointment</span>
</div>

</span>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default ProfileCard
