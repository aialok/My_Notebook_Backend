import { Alert } from "@material-tailwind/react";
 
export function AlertComponent(props) {
  return (
    <div className="flex w-full flex-col gap-2">
      
      <Alert variant="ghost"   className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]" open={props.open}>
        <span>{props.message}</span>
      </Alert>
    </div>
  );
}