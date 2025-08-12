import React from "react";
import axios, { type AxiosResponse } from "axios";

import { GiftCard } from "@/widgets";
import { useAppSelector } from "@/shared/hooks";
import type { IGifts } from "@/shared/types";
import styles from "./styles.module.scss";
import { Skeleton } from "@/shared/ui";

const Gifts: React.FC = () => {
  const [gifts, setGifts] = React.useState<
    { name: string; gift_id: number; id: number }[]
  >([]);
  const { isAuthorized, profile } = useAppSelector((state) => state.userSlice);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  // React.useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setGifts([
  //       { name: "Snoop Dog", gift_id: 123241, id: 1 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 2 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 3 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 4 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 5 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 6 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 7 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 8 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 9 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 10 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 11 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 12 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 13 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 14 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 15 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 16 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 17 },
  //       { name: "Snoop Dog", gift_id: 123241, id: 18 },
  //     ]);
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  React.useEffect(() => {
    const getGift = async () => {
      if (!isAuthorized || !profile?.telegramId) {
        setGifts([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response: AxiosResponse<IGifts[]> = await axios.get(
          `https://mirthfully-certain-capelin.cloudpub.ru/api/v1/gift/${profile.telegramId}`,
        );
        setGifts(response.data);
      } catch (err) {
        console.error("Failed to fetch gifts:", err);
        setError("Не удалось загрузить подарки. Попробуйте позже.");
        setGifts([]);
      } finally {
        setLoading(false);
      }
    };

    getGift();
  }, [isAuthorized, profile?.telegramId]);

  return (
    <div className={styles.gifts}>
      {loading && [...new Array(18)].map(() => <Skeleton />)}
      {error && <span className={styles.error}>{error}</span>}
      {!loading &&
        !error &&
        gifts.length > 0 &&
        gifts.map((gift) => <GiftCard key={gift.id} {...gift} />)}
      {!loading && isAuthorized && gifts.length === 0 && (
        <span style={{ color: "white" }}>У вас нет подарков</span>
      )}
    </div>
  );
};

export default Gifts;
