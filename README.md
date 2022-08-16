# Ultravoucher Test

    This is list assignment

    1. Logic Test 
    2. Query Test 

## Assignment Logic Test
    - [x] [Data] -> ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']
    - [x] [Run] -> node logic-tes.js
    - [x] [Output] -> [[ 'cook' ], [ 'save', 'aves', 'vase' ], [ 'taste', 'state' ], [ 'map' ]]

## Assignment Queris
    - [x] [Import] -> Import table from ultravoucher-test_2022-08-16.sql
    - [x] [Run] -> Queris [ select s.id, concat(ucase(LEFT(s.name, 1)), SUBSTRING(s.name, 2)) as name, concat(ucase(LEFT(p.name, 1)), SUBSTRING(p.name, 2)) as parent_name from students s left join parents p on p.id = s.parents_id ]    
    - [x] [Output] -> will be same as example from document.   
