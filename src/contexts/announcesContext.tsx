import {
  createContext,
  useContext,
  useState,
} from "react";

interface AuxProps {
  children: JSX.Element;
}

interface Announce {
  id: string;
  title: string;
  year: number;
  km: number;
  price: string;
  bid: string;
  description: string;
  coverImg: string;
  type: string;

  // ownerId ou userId??
  userId: string;

  cloaseAt: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AnnounceContextData {
  announces: Announce[];
}

interface AnnounceState {
  announces: Announce[];
}

const announcesContext =
  createContext<AnnounceContextData>(
    {} as AnnounceContextData
  );

// Not finished yet
export const AnnouncesProvider = ({
  children,
}: AuxProps) => {
  const [data, setData] = useState<AnnounceState>(
    () => {
      const announces = localStorage.getItem(
        "@teste:announces"
      );

      if (announces) {
        return {
          announces: JSON.parse(announces),
        };
      }
      return {} as AnnounceState;
    }
  );

  return (
    <announcesContext.Provider
      value={{
        announces: data.announces,
      }}>
      {children}
    </announcesContext.Provider>
  );
};

export const useAnnounce = () => {
  const context = useContext(announcesContext);

  if (!context) {
    throw new Error(
      "useAnnounce must be used within an AnnounceProvider"
    );
  }

  return context;
};
