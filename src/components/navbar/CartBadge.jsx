import React from "react";

const Badge = ({ count }) => {
  if (count <= 0) return null;

  return (
    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full z-10">
      {count > 99 ? "99+" : count}
    </span>
  );
};

const CartBadge = ({ itemCount = 0, onClick }) => {
  return (
    <div className="relative inline-block">
      <img
        src="icons/cart.svg"
        alt="cart"
        className="w-6 h-6 cursor-pointer"
        onClick={onClick}
      />
      <Badge count={itemCount} />
    </div>
  );
};

export default CartBadge;
