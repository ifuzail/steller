import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-full mt-10">
      <SignIn />
    </div>
  );
}