create or alter procedure getIndividualProduct(@id int) 
	as 
begin
	select * from products where id = @id
end 
go