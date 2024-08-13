import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center mx-auto">
        <div className="flex-wrap flex gap-2">
          <SignUp />
        </div>
      </div>
    </>
  );
}
