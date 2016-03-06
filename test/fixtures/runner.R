options( digits = 16 );
library( jsonlite );

x = seq( 1, 170, 1 )
y = factorial( x )

cat( y, sep = ",\n" )

write( toJSON( x, digits = 16, auto_unbox = TRUE ), "./test/fixtures/data1.json" )
write( toJSON( y, digits = 16, auto_unbox = TRUE ), "./test/fixtures/expected1.json" )

x = seq( -171.1, 169.9, length.out = 1000 )
y = factorial( x )

cat( y, sep = ",\n" )

write( toJSON( x, digits = 16, auto_unbox = TRUE ), "./test/fixtures/data2.json" )
write( toJSON( y, digits = 16, auto_unbox = TRUE ), "./test/fixtures/expected2.json" )
