type AppTextAreaProp = {
  classname?: string;
}
export default function AppTextArea({ classname }: AppTextAreaProp) {
  return (
    <div className="flex flex-col mt-8">
      <p>description</p>
      <textarea
        name=""
        id=""
        className="flex bg-transparent border border-[#272727] rounded-xl outline-none p-3 resize-none mt-1"
        cols={30}
        rows={4} ></textarea >
    </div>
  );
}
