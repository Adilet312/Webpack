

export default function Book(title,author,isbn,copies) {
    let _title = title;
    let _author = author;
    let _isbn = isbn;
    let _copies = copies;

    return {
      getAvailability(){
        if(_copies===0){
          return 'Out of stock';
        }else if(_copies < 10){
          return 'Low stock';
        }
        return 'In Stock'
      },
      sell(givenCopies){
        if(!givenCopies){
          _copies = _copies  - 1;
        }
        _copies -= givenCopies;
      },
      restock(givenCopies){
        _copies += givenCopies;
      },
      getTitle(){
        return _title;
      },
      getAuthor(){
        return _author;
      },
      getIsbn(){
        return _isbn;
      },
      getCopies(){
        return _copies;
      },
      setTitle(title){
        _title = title;
      },
      setAuthor(author){
        _author = author;
      },
      setIsbn(isbn){
        _isbn = isbn;
      },
      setCopies(copies){
        _copies = copies;
      }

    }
  }
