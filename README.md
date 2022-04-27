# imgGallery

**Description** Gallery viewer made using HTML, CSS and vanilla JS.

**Getting Started** Access the hosted project @ https://oshinongit.github.io/imgGallery/

**Dependencies** Tested primarily for Google Chrome (v 100 on Linux Ubuntu). Internet connection required when using locally as bootstrap loads using ="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css".

**How to run the program** Launch @ https://oshinongit.github.io/imgGallery/ The main image can be toggled by clikcing the thumbnails. The entire gallery can be toggled in and out by alternating between "Gallery" and "Dashboard". There is a search input with a "Go" button but this is only a placeholder and contains no functionality at the moment.

**Design** The main design is created using bootstrap for quick and easy uniformity. The design has been cerated for mobile resolution but should scale fairly to a certain point. Very big resolution such as large monitors may experience wierdness or uneveness in the sizing. This could be amended by using breakpoints for different resolution categories. Maybe 3 would be fine.

The current size of the two first buttons do not reflect this philosophy but I increased their size after testing on mobile as they felt to small to effectively use even if they better matched the design. They were basically the same size as the go button in the intial version. A future iteration of design might be to resize everything so that mobile usage is easier.

The base idea for the design is to keep regular margins between all components and stick to certain color choices that are also regularly occuring.

**Code** Most of the code should be understandeable by itself. Some larger functions could perhaps have used more comments. The philosophy for the code is maximize modularity and keep small functions. This I feel makes it easier to work with and error localization becomes more effective. Especially if handing over the work to a person who was not involved in writing the code.
