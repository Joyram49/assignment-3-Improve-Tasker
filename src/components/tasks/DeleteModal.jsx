export default function DeleteModal({ message, onDeleteTasks }) {
  return (
    <div className='text-white text-lg'>
      <div className='w-[400px] py-10 px-6 bg-gray-900/70 ring-1 ring-slate-400/30 flex flex-col justify-center items-center rounded-lg gap-6'>
        <p className='w-full text-center'>{message}</p>
        <div className='justify-self-center flex gap-10 text-base'>
          <button
            className='px-6 py-2 bg-[#199273] rounded-sm'
            onClick={() => onDeleteTasks(true)}
          >
            Ok
          </button>
          <button
            className='px-6 py-2 bg-[#833131] rounded-sm'
            onClick={() => onDeleteTasks(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
