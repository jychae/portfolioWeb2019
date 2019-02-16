<script src="//code.jquery.com/jquery-3.3.1.js"></script>
    <script>
      $( document ).ready( function() {
        var jbOffset = $( '#fixed-menu' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > jbOffset.top ) {
            $( '#fixed-menu' ).addClass( 'fixed-title' );
          }
          else {
            $( '#fixed-menu' ).removeClass( 'fixed-title' );
          }
        });
      } );
    </script>
