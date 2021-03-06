---
title: 'Binary and Linear Search Algorithms in JavaScript.'
date: 'Monday 13th Dec, 2021'
updated: 'Monday 24th Jan, 2022'
categories:
  - 'Searching'
  - 'Algorithms'
  - 'Snippets'
  - 'Linear Search'
  - 'Binary Search'
coverImage: 'https://ik.imagekit.io/lennyochanda/postImages/binary-and-linear-search-javascript/binary-and-linear-search-animation_nZrbjSJgN.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1643711324419'
alt: 'Computer'
coverWidth: 600
coverHeight: 400
excerpt: 'Implementing two simple Searching algorithms on JavaScript arrays, Linear and Binary Search.'
---

<script>
  import Callout from '$lib/components/Callout.svelte';
</script>

> **_An algorithm is a finite sequence of well-defined instructions, typically used to solve a class of specific problems or to perform a computation._**
>
> **_[\-Wikipedia](https://en.m.wikipedia.org/wiki/Algorithm)._**

### Intro

Hello and Welcome. In this post we will look at arrays and learn a little about searching them. JavaScript comes with a number of methods to be used on arrays. Some of these methods i.e sort, forEach and map are more sophisticated implementations of the algorithms we will look at so you can research the topic further if you haven't.

### Searching

Right away we will define searching.It means iterating over the elements of an array in order to retrieve data from it.
When it comes to arrays there are different techniques for searching depending on whether the array is sorted or not.

- Linear Search- used on both sorted and unsorted arrays.
- Binary Search- used on sorted arrays.

#### Linear Search

An example of an implementation of linear search is shown below:

```javascript
const names = ['Thomas', 'Antony', 'Lisa', 'Loice'];

function linearSearch(array, n) {
	for (let index = 0; index < array.length; index++) {
		if (array[index] == n) {
			return index;
		}
	}
	return false;
}

console.log(linearSearch(names, 'Thomas'));
```

We define a function linearSearch which takes in an array and the name we want to search as its arguments. If the name is found, we return it's index in the array.

When the function linearSearch is called, the array is sequentially iterated, from array\[0] up to array\[n] where n is 3 in this case(we will count from zero to length of the array - 1). The function will return immediately it finds an array element where the value of the element is equal to the provided search term, otherwise it will eventually return false after breaking out of the for loop.

The time complexity for a linear search algorithm is O(n) in the worst case. What this means is we have to go through every single element to know whether our search term is present. If we had an array with a thousand names and we had to find one that exists at index 999, we would have to go through all the array elements between array\[0] and array\[999].

We can use a linear search when we have an array of unsorted data because when the data is sorted a binary search would be faster. Let's talk about binary search next.

#### Binary Search

A binary search works by cutting an array in half at a middle value and checking whether the value being searched for is greater than the middle value. If it is less than the middle value, the search only continues in the lower half, but if it is more, the search happens in the upper half. This is repeated until either the value is found or the possible values are exhausted.

An example of a binary search in the matrix could be finding a word in a dictionary. Dictionaries are sorted alphabetically. This means that if we want to find a word, for example tomato, we don't have to check every single word in the dictionary. It would be slow, redundant and just painful. We can search for the word tomato by following these steps:

<Callout>
1. Set the high and lowest possible values i.e last and first word in the dictionary.
<br/>
2. Find the word in the middle of the high and low values.
<br/>
3. Compare the middle value to tomato. If it is equal, return. If it is alphabetically after tomato set the high value to be equal to the current middle value and go back to step 2. Otherwise if it is before tomato, set the low value to be equal to the current middle value and go back to step 2.<br/>
4. Repeat steps 2 & 3 until you find "tomato" or the remaining words can not be narrowed down further.
</Callout>

An example of binary search on a number array:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(array, n) {
	let lowIndex = 0,
		highIndex = array.length - 1;

	while (lowIndex <= highIndex) {
		let midIndex = Math.floor((lowIndex + highIndex) / 2);
		if (array[midIndex] == n) {
			return midIndex;
		} else if (n > array[midIndex]) {
			lowIndex = midIndex;
		} else {
			highIndex = midIndex;
		}
	}
	return 0;
}

console.log(binarySearch(numbers, 5));
```

As seen in the example, the algorithm keeps dividing the array into two halves and comparing until a solution is found. With each iteration of our while loop, the number of possible elements is cut by half. This is basically "Divide and Conquer" with extra steps. For large arrays, binary search is faster than linear search.

In the worst case, binary search has a perfomance of O(log n), also called logarithmic time where n is the number of elements in the array. This means that the running time grows in proportion to the logarithm of the input size. i.e if searching through 10 names takes say 1 second at most, 100 names take 2 seconds and 1000 names take 3 seconds, this is an example of logarithmic time.

### Summary

We have looked at two searching algorithms that we can use on arrays in JavaScript: Linear and Binary Search. Binary Search is used on sorted arrays while Linear Search can be used for both sorted and unsorted arrays.
When an array is sorted, binary search will have a better perfomance compared to linear search.

We have reached the end of the lesson. Thanks for going through the article. In case of any questions or corrections please shoot me a message on the [about page](/about).
