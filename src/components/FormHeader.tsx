interface FormHeaderProps {
  title: string;
  subtitle: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className='w-full flex flex-col items-center mb-10'>
      <h1 className='text-3xl text-[#F6C90E] font-bold tracking-wider mb-1'>
        {title}
      </h1>
      <p className='text-gray-200'>{subtitle}</p>
    </div>
  );
};

export default FormHeader;
