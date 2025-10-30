import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-2">
      <Card className="py-2">
        <CardContent>
          <CardDescription>총 필요 금액</CardDescription>
          <CardTitle className="text-xl">₩0</CardTitle>
        </CardContent>
      </Card>
      <div className="mt-20 grid grid-cols-2 gap-4">
        <Link href="/(user)/home">
          <Card className="py-1 rounded-md">
            <CardContent className="flex flex-col items-center gap-1.5">
              <Image
                className="h-[50px] w-auto"
                src="/images/home.png"
                alt="집"
                width={50}
                height={50}
              />
              <CardTitle className="text-lg">신혼집</CardTitle>
            </CardContent>
          </Card>
        </Link>
        <Link href="/(user)/home">
          <Card className="py-1 rounded-md">
            <CardContent className="flex flex-col items-center gap-1.5">
              <Image
                className="h-[50px] w-auto"
                src="/images/wedding-ring.png"
                alt="반지"
                width={50}
                height={50}
              />
              <CardTitle className="text-lg">예물</CardTitle>
            </CardContent>
          </Card>
        </Link>
        <Link href="/(user)/home">
          <Card className="py-5 rounded-md">
            <CardContent className="relative">
              <Image
                className="absolute -top-12 right-1"
                src="/images/home.png"
                alt="집"
                width={50}
                height={50}
              />
              <CardTitle className="text-center">신혼 여행</CardTitle>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
