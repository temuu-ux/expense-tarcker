export default function TotalExpenses() {
  return (
    <div className="bg-[#FFFFFF] w-[382px] rounded-2xl">
      <div className="border-b border-[#E2E8F0] h-[56px] flex text-center items-center space-x-2 pt-1 px-6">
        <img src="/blue.svg" alt="" className="w-2 h-2" />
        <p className="text-[#0F172A] text-base not-italic font-semibold">
          Total Expenses
        </p>
      </div>
      <div className="h-[152px] flex flex-col items-start justify-center gap-1 px-6">
        <div>
          <p className="text-4xl text-[#000000] font-semibold not-italic">
            -1,200,000 ₮
          </p>
          <p className="text-[#64748B] text-lg font-normal not-italic">
            Your Income Amount
          </p>
        </div>
        <div className="flex space-x-2">
          <img src="/down2.svg" alt="" className="w-6 h-6" />
          <p className="text-lg">32% from last month</p>
        </div>
      </div>
    </div>
  );
}
