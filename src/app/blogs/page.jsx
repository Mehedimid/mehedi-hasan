import SecondaryTitle from '@/components/shared/sectionHeader/SecondaryTitle';
import SectionHeader from '@/components/shared/sectionHeader/SectionHeader';
import {  BookOpen } from 'lucide-react';
const page = () => {
  return (
    <div className='layout-padding'>
      <SectionHeader icon={<BookOpen />} title="Blogs" />

     <div className='h-[70vh] flex justify-center items-center'>
      <SecondaryTitle text="blogs are coming soon" />
     </div>
    </div>
  )
}

export default page