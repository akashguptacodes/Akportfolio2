import BallCanvas from '../components/TechModels/BallCanvas'
import TitleHeader from '../components/TitleHeader'
import { technologies } from '../constants/utils'

const TechStack = () => {
    return (
        <div id='skills' className='flex-center section-padding mt-36'>
            <div className='w-full h-full md:px-10 px-5'>
                <TitleHeader
                    title='My Preffered Tech Stack'
                    sub='The Skills i bring to the table'
                />
                <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
                    {technologies.map((technology) => (
                        <div className='w-28 h-28 z-10' key={technology.name}>
                            <BallCanvas icon={technology.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack