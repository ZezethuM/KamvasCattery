describe('Test function bookingCost', function () {
    it('It should be able to calculate booking of Wednesday for 3 day', function () {
        assert.equal(101.25, bookingCost({
            check_in_day: 'Wednesday',
            duration: 3,
            cat_name: 'Snowy'
        }));
    });

        it('It should be able to calculate booking of Monday for 3 day', function () {
            assert.equal(135.00, bookingCost({
                check_in_day: 'Monday',
                duration: 3,
                cat_name: 'Snowy'
            }));
        });

         it('It should be able to calculate amount for Friday 3 day', function () {
                assert.equal(114.75, bookingCost({
                    check_in_day: 'Friday',
                    duration: 3,
                    cat_name: 'Snowy'
                }));
            });
     });
