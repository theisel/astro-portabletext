---
"astro-portabletext": minor
---

**BREAKING** Brings in consistent naming, which reflects **Portable Text** node types.


**_T_ NodeType**

```diff
- type NodeType = "block" | "blockStyle" | "listStyle" | "listItemStyle" | "mark";
+ type NodeType = "type" | "block" | "list" | "listItem" | "mark";
```

**_T_ PortableTextComponents**

| Property | Counterpart |
| :--- | :--- |
| type | unknownType |
| block | ~~unknownBlockStyle~~ unknownBlock |
| list | unknownList |
| listItem | unknownListItem |
| mark | unknownMark |
| hardBreak |  |

**PortableText**

```diff
<PortableText 
  components={{
-   unknownBlockStyle: /* custom component */;
+   unknownBlock: /* custom component */;
  }}
>
```
