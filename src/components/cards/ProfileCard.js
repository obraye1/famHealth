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
  const [opens, setOpens] = useState(false);
 
  const handleOpens = () => setOpens(!opens);
  return (
    
<div className="py-20 bg-gray-50 overflow-hidden">
    <div className="mx-auto w-full px-4 text-center px-6 space-y-8 text-indigo-600 md:px-15">
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
                    <a href="#" className="flex justify-between items-center group-hover:text-indigo-600">
                        
                    <Dialog open={open} handler={handleOpen} className="flex flex-row h-full items-center w-full ">
                    <img src="/images/dental.jpg" className="rounded-full p-6" width="612" height="612" alt="Dental"/>

        <DialogBody divider>
        <DialogHeader>                        <h5 className="text-xl text-indigo-600 font-medium transition group-hover:text-indigo-950">Dental Services</h5>
</DialogHeader>

        <div className="space-y-2">
                        <p className="text-xl text-gray-600">At our hospital, we understand the importance of maintaining good oral health. That's why we offer comprehensive dental services to ensure that your teeth and gums are healthy and happy. 
                        Our team of skilled dentists and hygienists use the latest technology and techniques to provide a wide range of services, including cleanings, fillings, crowns, implants, and cosmetic dentistry. We prioritize patient comfort and offer a relaxing environment to help ease any dental anxieties. Our personalized care and attention to detail ensure that each patient receives a treatment plan tailored to their individual needs. 

We are dedicated to promoting good oral health and educating patients on the best practices to maintain a healthy smile for life. 
Our hospital offers convenient scheduling options and accepts most insurance plans. Don't put off your dental health any longer, schedule your appointment today and experience exceptional dental care at our state-of-the-art hospital.</p>
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
                
    <span class="group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 px-1 text-sm rounded-md absolute left-1/2 
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
            <span type='button' onClick={handleOpens} className="mr-2">        + 
</span>
                
    <span class="group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
        Book an appointment</span>
</div>
            
          </Button>
          
          
          
          
        </DialogFooter>
        </DialogBody>
       
      </Dialog>


                        <span type='button' onClick={handleOpen} className="text-sm">Read more</span>
                        <span type='button' onClick={handleOpens} className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <div class="group flex relative">
       +
                
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
                    <a href="#" className="flex justify-between items-center group-hover:text-indigo-600">
                        <span className="text-sm">Read more</span>
                        <span type='button' onClick={handleOpens} className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"> 
                        <div class="group flex relative">
+
                
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
                    <a href="#" className="flex justify-between items-center group-hover:text-indigo-600">
                        <span className="text-sm">Read more</span>
                        <span type='button' onClick={handleOpens} className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <div class="group flex relative">
                +
    <span class="mt-0 group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Book an appointment</span>
</div>                            </span>
                    </a>
                </div>
            </div>
            <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                    <img src="/images/ophthalmology.png" className="w-10" width="512" height="512" alt="Ophthalmology"/>
                    
                    <div className="space-y-2">
                        <h5 className="text-xl text-indigo-600 font-medium transition group-hover:text-indigo-600">Ophthalmology</h5>
                        <p className="text-sm text-gray-600">Clear vision is essential for a fulfilling life, and we are here to help you achieve it. Our skilled ophthalmologists provide a wide range of services, from routine eye exams to complex surgeries. With the latest technology and personalized care,
                         we are committed to helping you maintain healthy eyesight. Schedule your appointment today.</p>
                    </div>
                    <a href="#" className="flex justify-between items-center group-hover:text-indigo-600">
                        <span className="text-sm">Read more</span>
                        <span type='button' onClick={handleOpens} className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"> <div class="group flex relative">
                            +                
    <span class="mt-0 group-hover:opacity-100 transition-opacity bg-zinc-300 px-1 text-sm text-indigo-500 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Book an appointment</span>
</div></span>
                    </a>
                </div>
            </div>
            
        </div>
    </div>

    <Dialog open={opens} handler={handleOpens} className='bg-zinc-200'>
        <div class="flex items-center justify-center p-15 text-2xl text-[#6A64F1] font-semibold underline capitalize">Book an Appointment</div>
        <DialogBody divider>
        <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-3/4 max-w-[550px] ">
        <form>
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                </label>
                <input type="text" name="name" id="name" placeholder="Full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Phone Number
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                            Date
                        </label>
                        <input type="date" name="date" id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                            Time
                        </label>
                        <input type="time" name="time" id="time"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

            <div class="mb-5 pt-3">
                <div class="-mx-3 flex flex-wrap">
                            <div class="w-full px-3 sm:w-1/2">
                                <div class="mb-5">
                                <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                            Select Service
                        </label>
                                <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="service" name="service">
                        <option value="">--Select a service--</option>
        
                        <option value="dental">Dental Servies </option>
                        <option value="emergencyt">Emergency care</option>
                        <option value="surgery">Surgery</option>
                        <option value="imaging">Diagnostic Imaging (such as X-rays, CT scans, and MRIs)</option>
                        <option value="mental">Mental Health Services</option>
                        <option value="maternity">Maternity and neonatal care</option>
                        <option value="laboratory">Laboratory testing</option>
                        <option value="rehabilitation">Rehabilitation services (such as physical therapy)</option>
                        <option value="icu">Intensive care unit (ICU) services</option>
                        <option value="Cardiology">Cardiology services</option>
                        <option value="Oncology">Oncology services</option>
                        <option value="Respiratory">Respiratory therapy</option>
                        <option value="Pain management">Pain management services</option>
                        <option value="Nutrition">Nutrition and dietary counseling</option>
                        <option value="Social">Social work and case management services</option>
                        <option value="transfusion">Blood transfusion and donation services</option>
                        <option value="organ">Organ transplant services</option>
                        <option value="Sleep">Sleep disorder diagnosis and treatment</option>
                    </select>
                                </div>
                            </div>
                          
                        </div>
                    </div>
        
                    <div>
                        <button
                            class="hover:shadow-form hover:bg-green-500 w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Book Appointment
                        </button>
                        <button
                            class="mt-3 hover:shadow-form hover:bg-red-600 w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            <a href='/'>Cancel</a>
                        </button>
                    </div>
                </form>
        
            
            </div>
</div> 
        </DialogBody>
        <DialogFooter>
          
        </DialogFooter>
      </Dialog>

</div>
  )
}

export default ProfileCard
