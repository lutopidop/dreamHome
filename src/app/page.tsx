import { Suspense } from "react";
import HerosectionCom from "@/components/herosection/HerosectionCom";


export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
     <HerosectionCom/>
    </Suspense>
  );
}
