const LoadingDetail = () => {
  return (
    <>
      <div className="w-8/12 sm:w-7/12 md:w-5/12 h-fit my-5 mx-auto">
        <div className="sm:w-11/12 md:w-10/12 mx-auto">
          <div class=" bg-secondary border border-primary shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 w-1/2 bg-slate-500 rounded m-auto"></div>
                <div class="h-2 bg-slate-500 rounded"></div>
                <div class="h-2 bg-slate-500 rounded"></div>
                <div class="h-2 bg-slate-500 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-500 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-500 rounded col-span-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingDetail;
