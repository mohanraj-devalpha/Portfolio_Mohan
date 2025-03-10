
import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {
    const backend = [
        "Django",
        "FastAPI",
        "SQL",
        "Express.js"
      ];
      
      const frontend = [
        "React.js",
        "Next.js",
        "HTML",
        "Javascript",
        "CSS",
        "TailWindCSS"
      ];
      
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-tranlate-y-1 transition-all"> 
                    <p>
                    Hi, I'm Mohanraj, a passionate developer with a strong interest in cloud computing, web development, and server management. I love building scalable applications and optimizing infrastructure for better performance and security.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-al p-6 hover:-translate-y-1 transition-all">
                            <h3 className="test-al font-bold mb-4">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontend.map((tech, key)  => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover: shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-al p-6 hover:-translate-y-1 transition-all">
                            <h3 className="test-al font-bold mb-4">
                                Backend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {backend.map((tech, key)  => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover: shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}

                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h2 className="text-xl font-bold mb-4">Education</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> B.TECH.  in Informantion Technology</strong> -Puducherry Technological University 
                            (2020-2024)
                        </li>
                        <li>
                            Relevant CourseWork: Data Structures, Web Development, Cloud Computing ....
                        </li>
                        <li>
                            <strong> HSC  in Computer Science</strong> -New Modern Vidhya Mandir Higher Secondary School 
                            (2019-2020) Grade(83.5%)
                        </li>
                        <li>
                            <strong> SSLC </strong> -New Modern Vidhya Mandir Higher Secondary School 
                            (2017-2018) Grade(89.2%)
                        </li>
                    </ul>



                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h2 className="text-xl font-bold mb-4"> Intern Experience</h2>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Backend developer at Yuvabe Jan2024-Mar2024 </h4>
                            <p>
                                Assisted in building Back-end components and integration REST APIs  for  ChatBot for the Medical Diagnosis
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold"> Web Developer at Askan Technologies Jan2024-Mar2024 </h4>
                            <p>
                                Assisted in building front-end components and integration REST APIs  for  ChatBot for the Medical Diagnosis
                            </p>
                        </div>
                    </div>
                    

                    </div>
                </div>
                

            </div>
            </RevealOnScroll>
        </section>

    );
};