import { useAppSelector } from "@/shared/hooks";
import styles from "./styles.module.scss";
import type { modalDataType, IGifts } from "@/shared/types";

const SaleGiftModal = () => {
  const modalState = useAppSelector((state) => state.modal);
  const { data: gift } = modalState as modalDataType<IGifts>;

  return (
    <div>
      <div className={styles.giftDescription}>
        <img src={gift.photo_url} alt="gift image" />
        <div>
          <span className={styles.nameGift}>
            {gift.name} #{gift.gift_id}
          </span>
          <p>
            Модель: {gift.model_name} {gift.model_rarity}
          </p>
          <p>
            Фон: {gift.backdrop_name} {gift.backdrop_rarity}
          </p>
          <p>
            Символ: {gift.symbol_name} {gift.symbol_rarity}
          </p>
          <p>
            Выпущено: {gift.quantity_issued} из {gift.quantity_total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaleGiftModal;
