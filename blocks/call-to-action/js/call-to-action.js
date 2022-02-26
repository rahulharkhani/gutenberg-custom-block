const { registerBlockType } = wp.blocks;

( function( blocks, editor, element ) {

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */


	var el = element.createElement;

	blocks.registerBlockType( 'mcb/call-to-action', {
		// built-in attributes
		title: 'Custom: Call to Action', // The title of block in editor.
		description: 'Block to generate a  custom call to action', // The description of block in editor.
		icon: 'admin-comments', // The icon of block in editor.
		category: 'mygutenberg-blocks', // layout  The category of block in editor.

		// custom attributes
		attributes: {
			type: { type: 'string', default: 'default' }, // Notice box type for loading the appropriate CSS class. Default class is 'default'.
			title: { type: 'string' }, // Notice box title in h4 tag
			content: { type: 'array', source: 'children', selector: 'p' } /// Notice box content in p tag
		},

		// custom functions

		// built-in functions
		edit: function( props ) {
			function updateTitle( event ) {
		      props.setAttributes( { title: event.target.value } );
		   }

		   function updateContent( newdata ) {
		      props.setAttributes( { content: newdata } );
		   }

		   function updateType( event ) {
		      props.setAttributes( { type: event.target.value } );
		   }

		   return el( 'div',
		      {
		         className: 'notice-box notice-' + props.attributes.type
		      },
		      el(
		         'select',
		         {
		            onChange: updateType,
		            value: props.attributes.type,
		         },
		         el("option", {value: "default" }, "Default"),
		         el("option", {value: "success" }, "Success"),
		         el("option", {value: "danger" }, "Danger")
		      ),
		      el(
		         'input',
		         {
		            type: 'text',
		            placeholder: 'Enter title here...',
		            value: props.attributes.title,
		            onChange: updateTitle,
		            style: { width: '100%' }
		         }
		      ),
		      el(
		         wp.editor.RichText,
		         {
		            tagName: 'p',
		            onChange: updateContent,
		            value: props.attributes.content,
		            placeholder: 'Enter description here...'
		         }
		      )
		   ); // End return
			//return null;
		},
		save: function( props ) {
			return el( 'div',
		      {
		         className: 'notice-box notice-' + props.attributes.type
		      },
		      el(
		         'h4',
		         null,
		         props.attributes.title
		      ),
		      el( wp.editor.RichText.Content, {
		         tagName: 'p',
		         value: props.attributes.content
		      })

		   ); // End return
		},

	});

	console.log( "I'm loaded call to action!" );

	/*wp.blocks.registerBlockStyle( 'core/quote', {
		name: 'fancy-quote',
		label: 'Fancy Quote',
	});*/

	/*var el = wp.element.createElement;

	wp.blocks.registerBlockType('shaiful-gutenberg/notice-block', {

	   title: 'Notice', // Block name visible to user

	   icon: 'lightbulb', // Toolbar icon can be either using WP Dashicons or custom SVG

	   category: 'common', // Under which category the block would appear

	   attributes: { // The data this block will be storing

	      type: { type: 'string', default: 'default' }, // Notice box type for loading the appropriate CSS class. Default class is 'default'.

	      title: { type: 'string' }, // Notice box title in h4 tag

	      content: { type: 'array', source: 'children', selector: 'p' } /// Notice box content in p tag

	   },

	   edit: function(props) {
	      // How our block renders in the editor in edit mode
	      return null;
	   },

	   save: function(props) {
	      // How our block renders on the frontend
	      return null;
	   }
	});*/

})( window.wp.blocks, window.wp.editor, window.wp.element );