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
    </div>
  );
}
