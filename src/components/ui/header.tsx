"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn } from "next-auth/react";

const Header = () => {
  const handleLoginClick = async () => {
    await signIn();
  };
  return (
    <Card className="flex justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-3 flex flex-col gap-2">
            <Button
              onClick={handleLoginClick}
              variant="outline"
              className="w-full justify-start gap-2"
            >
              <LogInIcon size={16} /> Fazer login
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} /> Início
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16} /> Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} /> Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="text-lg font-semibold">
        Arena <span className="text-primary">Pro</span>
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
