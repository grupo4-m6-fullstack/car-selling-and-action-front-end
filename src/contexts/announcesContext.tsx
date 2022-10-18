interface Announce {
  id: string;
  title: string;
  year: number;
  km: number;
  price: string;
  bid: string;
  description: string;
  cover_img: string;
  type: string;

  // ownerId ou userId??
  ownerId: string;

  cloaseAt: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Not finished yet
const announcesContext = () => {
  return (
    <div>announcesContext</div>
  );
};

export default announcesContext;