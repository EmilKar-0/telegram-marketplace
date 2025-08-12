import React from "react";
import { PricesFilterModal } from "@/widgets/PricesFilterModal";
import { TitlesFilterModal } from "@/widgets/TitlesFilterModal";
import { SaleGiftModal } from "@/widgets/SaleGiftModal";

export interface ModalData {
  titleData: string;
  componentContent: React.ReactNode;
}

const pricesData: ModalData = {
  titleData: "Фильтр по цене",
  componentContent: <PricesFilterModal />,
};
const namesData: ModalData = {
  titleData: "Фильтр по имени",
  componentContent: <TitlesFilterModal />,
};
const saleData: ModalData = {
  titleData: "Продать товар",
  componentContent: <SaleGiftModal />,
};

export const returnContent = (content: string) => {
  switch (content) {
    case "names":
      return namesData;
    case "prices":
      return pricesData;
    case "sale":
      return saleData;
    case "":
      return {};
    default:
      return {
        titleData: "",
        componentContent: <div>Контент не найден</div>,
      };
  }
};
