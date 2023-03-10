import Navbar from '../Components/Navbar';
import ProjectCard from '../Components/ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div className='bg-yellow' style={{ 'min-height': '100vh' }}>
            <Navbar />
            <div className='container' style={{ 'padding-top': '80px', 'padding-bottom': '20px' }}>
                <div className='mb-5'>
                    <h2 className="font-manrope fw-semibold text-center" style={{ 'font-size': '41px' }}>Projects</h2>
                </div>
                <div className='mb-5'>
                    <div className='d-flex justify-content-center column-gap-5'>
                        <span className='active border-bottom border-3 pb-2 border-red' href={'/'}>All</span>
                        <span href={'/'}>Frontend</span>
                        <span href={'/'}>Backend</span>
                    </div>
                </div>
                <div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-gap-1 column-gap-2 column-gap-lg-5'>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;