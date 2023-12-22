import { Upload } from "lucide-react";
import { ReactNode } from "react";
import { Center } from "..";

const DOMID = "UPLOADER";

export const Uploader = ({
  children,
  onUpload,
}: {
  children: ReactNode;
  onUpload: (formData: FormData) => Promise<void>;
}) => {
  return (
    <div className="group relative select-none overflow-hidden rounded-lg">
      {children}
      <Center
        className="absolute left-0 top-0 z-10 h-full w-full cursor-pointer bg-gray-600/50 text-white opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100"
        onClick={(e) => {
          e.stopPropagation();
          const el = document.createElement("input");
          el.type = "file";
          el.multiple = false;
          el.id = DOMID;
          document.body.appendChild(el);
          el.onchange = async (e: any) => {
            const file = e.target.files[0] as File;
            const formData = new FormData();
            formData.append("file", file);            
            await onUpload(formData);
            // document.body.removeChild(el);
          };
          el.oncancel = () => {
            document.body.removeChild(el);
          };
          el.click();
        }}
      >
        <Upload />
      </Center>
    </div>
  );
};
