# StringFuzzer
    Generating practical typos for fuzzy matchcing.

Methods return arrays of lowercase strings.<br>
Considerations:
- Key proximity: within one 'step' of home row
- Ordinal transposition

#### Usage
```javascript
const fuzzer = new StringFuzzer('Bob Smith')
const potentialMatches = fuzzer.fuzz() // For all methods
    [
        'vob',   'fob',   'gob',   'hob',   'nob',
        'bpb',   'blb',   'bkb',   'bib',   'bov',
        'bof',   'bog',   'boh',   'bon',   'zmith',
        'amith', 'wmith', 'emith', 'dmith', 'xmith',
        'snith', 'sjith', 'skith', 's,ith', 'smoth',
        'smkth', 'smjth', 'smuth', 'smiyh', 'smigh',
        'smifh', 'smirh', 'smitb', 'smitg', 'smity',
        'smitu', 'smitj', 'smitn', 'obb',   'bbo',
        'bob',   'msith', 'simth', 'smtih', 'smiht',
        'smith'
    ]
```
Or based on a fat-fingered string
```javascript
const fuzzer = new StringFuzzer('Tmo Sandres')
fuzzer.fuzz().some((word) => word === "tom")
true
fuzzer.fuzz().some((word) => word === "sanders")
true
fuzzer.fuzz().some((word) => word === "tmo")
true
```
