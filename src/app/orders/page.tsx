import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderItem from "./components/order-item";

const OrdersPage = async () => {
  const user = getServerSession(authOptions);
  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  })

  return ( 
    <div className="p-5">
        <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase mb-4"
        variant="outline"
      >
        <PackageSearchIcon size={16} />
        Meus Pedidos
      </Badge>

     <div className="flex flex-col gap-5">
     {
      orders.map((order) => (
        <OrderItem key={order.id} order={order}/>
      ))
     }
     </div>
    </div>
   );
}
 
export default OrdersPage;