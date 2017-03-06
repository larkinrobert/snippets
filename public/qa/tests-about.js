suite('"About" Page Tests', function(){
    test('page should contain link to contact page', fuction(){
        assert($('[href="/contact"]').length);
    });
});
