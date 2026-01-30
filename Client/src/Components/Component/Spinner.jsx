
function Spinner() {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center">
      <div className="h-[60px] w-[60px] animate-spin rounded-full border-[6px] border-[#ddd] border-t-primary" />
    </div>
  );
}

export default Spinner;
