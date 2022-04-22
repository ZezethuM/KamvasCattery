describe('Test function bookingCost', function(){
    it('It should be able to calculate booking of Wednesday for 5 day', function(){
        assert(168,75, bookingCost(5, "Wednesday"));
    });

    it('It should be able to calculate booking of Friday for 2 day', function(){
        assert(76.5, bookingCost(2, "Friday"));
    });

    it('It should be able to calculate amount for any other day besides Wednesday and Friday', function(){
        assert(315, bookingCost(7, "Saturday"));
    });
});
