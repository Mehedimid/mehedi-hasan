import MotionWrapper from '@/components/shared/motion/MotionWrapper';
import SecondaryTitle from '@/components/shared/sectionHeader/SecondaryTitle';
import SectionHeader from '@/components/shared/sectionHeader/SectionHeader';
import {  BookOpen } from 'lucide-react';
const page = () => {
  return (
    <div className='layout-padding'>
      <SectionHeader icon={<BookOpen />} title="Blogs" />

     <MotionWrapper direction='up' className='h-[70vh] flex justify-center items-center'>
      <SecondaryTitle text="blogs are coming soon . . ." />
     </MotionWrapper>
    </div>
  )
}

export default page