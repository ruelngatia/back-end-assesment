create or alter procedure getAllProducts 
	as 
begin
	select * from products where deleted != 1
end 
go