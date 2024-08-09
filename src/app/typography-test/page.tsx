export default function Page() {
  return (
    <div className='grid max-w-fit grid-flow-row gap-2 p-4 text-sm'>
      <div className='grid place-items-center'>
        <h1>THIS IS THE H1 HEADING</h1>
        <h2>THIS IS THE H2 HEADING</h2>
        <h3>THIS IS THE H3 HEADING</h3>
        <h4>THIS IS THE H4 HEADING</h4>
        <h5>THIS IS THE H5 HEADING</h5>
        <h5>this is a h5 heading</h5>
        <p>this is a paragraph</p>
      </div>
      <h1>THIS IS THE H1 HEADING</h1>
      <p>
        Above this paragraph should be the H1 heading for your web page. If it is not visible, the
        design settings for the H1 tag is set to display:none which many WordPress Themes use to
        hide the blog title text and replace it with a graphic. Do not use H1 within your blog post
        area.
      </p>
      <p>
        If the design in the H1 heading looks like your blog title or blog post title, then that is
        the style set for that HTML tag and you should not use it within your blog post area.
      </p>
      <p>
        Inside of this test data section are most of the basic HTML and XHTML and CSS styles that
        you might use within your WordPress Theme. You need to know what that will look like as part
        of structuring your styles.
      </p>
      <h2>THIS IS THE H2 HEADING</h2>
      <p>
        Above this paragraph should be the H2 heading for your web page. WordPress Themes use the h2
        heading for various purposes. Logically, it should be either the post title or the first
        heading in the post content. However, it is used all over WordPress Themes including the
        subtitle, tag line, post title, comment area, sidebar area, and even in the footer. Be
        specific when styling each h2 headings to ensure you are not styling all of them.
      </p>
      <h3>THIS IS THE H3 HEADING</h3>
      <p>
        Is this the same heading as is in your post title or is this the section headings found
        within your sidebar? Or is it different? This is the post content heading for the HTML tag
        h3, as is the one below, H4, for section headings within your post to divide up topics. If
        there is an H3 or H4 tag in your sidebar, you will need to identify the parent HTML and CSS
        container for the sidebar and style those appropriate in your blogs stylesheet.
      </p>
      <h4>THIS IS THE H4 HEADING</h4>
      <p></p>
      <ul>General Lists using the {`<ul>`} tag</ul>
      <ol>Ordered Lists using the {`<ol>`} tag</ol>
      <dl>Definition Lists using the {`<dl>`} tag</dl>
      <ul>And that’s the end of the lists</ul>
      <p>
        And we’ve just tested a paragraph before and after a general list along with a nested list
        to help you see what at least three levels of the list will look like. Make sure that each
        level of the list is styled to match your specific needs. You might want to use the default
        disc or circle, or you might want to add graphic bullets to your list, too.
      </p>
      <h5>THIS IS THE H5 HEADING</h5>
      <p>
        While the H5 heading is not always used, maybe you might find a need for it if your H1 and
        H2 and H3 headings are used. You might need one to two levels of subheadings in your post
        content, so this one gives you another option.
      </p>
      <h1>
        SECOND TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE CAN TEST LINE HEIGHT,
        TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY
        TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE CAN TEST LINE HEIGHT
      </h1>
      <span className='text-xs'>
        THIS IS A TEXT ELEMENT WITH A CLASS OF TEXT-XS. IT IS USED FOR VERY SMALL TEXT, LIKE A
        ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO
        THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE
        CAN TEST LINE HEIGHT
      </span>
      <span className='text-sm'>
        THIS IS A TEXT ELEMENT WITH A CLASS OF TEXT-SM. IT IS USED FOR SMALL TEXT, LIKE A CAPTION OR
        ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO
        THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE
        CAN TEST LINE HEIGHT
      </span>
      <span className='text-base'>
        THIS IS A TEXT ELEMENT WITH A CLASS OF TEXT-BASE. IT IS USED FOR NORMAL TEXT, LIKE A BODY
        ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO
        THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE
        CAN TEST LINE HEIGHT
      </span>
      <span className='text-lg'>
        THIS IS A TEXT ELEMENT WITH A CLASS OF TEXT-LG. IT IS USED FOR LARGE TEXT, LIKE A TITLE OR A
        ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO
        THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE
        CAN TEST LINE HEIGHT
      </span>
      <span className='text-xl'>
        THIS IS A TEXT ELEMENT WITH A CLASS OF TEXT-XL. IT IS USED FOR EXTRA LARGE TEXT, LIKE A
        ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO
        THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE
        CAN TEST LINE HEIGHT
      </span>
      <span className='text-2xl'>
        THIS IS A TEXT ELEMENT WITH A CLASS OF TEXT-2XL. IT IS USED FOR EXTRA EXTRA LARGE TEXT, LIKE
        ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO
        THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE
        CAN TEST LINE HEIGHT
      </span>
      <span className='text-3xl'>
        THIS IS A TEXT ELEMENT WITH A CLASS OF TEXT-3XL. IT IS USED FOR EXTRA EXTRA EXTRA LARGE
        ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO
        THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE
        CAN TEST LINE HEIGHT
      </span>
      <span className='text-4xl'>
        THIS IS A TEXT ELEMENT WITH A CLASS OF TEXT-4XL. IT IS USED FOR EXTRA EXTRA EXTRA EXTRA
        ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO
        THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE
        CAN TEST LINE HEIGHT
      </span>
      <span className='text-5xl'>
        THIS IS A TEXT ELEMENT WITH A CLASS OF TEXT-5XL. IT IS USED FOR EXTRA EXTRA EXTRA EXTRA
        ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO
        THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE
        CAN TEST LINE HEIGHT
      </span>
      <span className='text-6xl'>
        THIS IS A TEXT ELEMENT WITH A CLASS OF TEXT-6XL. IT IS USED FOR EXTRA EXTRA EXTRA EXTRA
        ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO
        THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE
        CAN TEST LINE HEIGHT
      </span>
      <span className='text-7xl'>
        THIS IS A TEXT ELEMENT WITH A CLASS OF TEXT-7XL. IT IS USED FOR EXTRA EXTRA EXTRA EXTRA
        ELEMENT SO THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO
        THAT WE CAN TEST LINE HEIGHT, TYPOGRAPHY TEST PAGE WITH A VERY LONG H1 ELEMENT SO THAT WE
        CAN TEST LINE HEIGHT
      </span>
    </div>
  );
}
