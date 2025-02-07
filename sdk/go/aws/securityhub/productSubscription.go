// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package securityhub

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Subscribes to a Security Hub product.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"fmt"
//
// 	"github.com/pulumi/pulumi-aws/sdk/v4/go/aws"
// 	"github.com/pulumi/pulumi-aws/sdk/v4/go/aws/securityhub"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleAccount, err := securityhub.NewAccount(ctx, "exampleAccount", nil)
// 		if err != nil {
// 			return err
// 		}
// 		current, err := aws.GetRegion(ctx, nil, nil)
// 		if err != nil {
// 			return err
// 		}
// 		_, err = securityhub.NewProductSubscription(ctx, "exampleProductSubscription", &securityhub.ProductSubscriptionArgs{
// 			ProductArn: pulumi.String(fmt.Sprintf("%v%v%v", "arn:aws:securityhub:", current.Name, ":733251395267:product/alertlogic/althreatmanagement")),
// 		}, pulumi.DependsOn([]pulumi.Resource{
// 			exampleAccount,
// 		}))
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// Security Hub product subscriptions can be imported in the form `product_arn,arn`, e.g.
//
// ```sh
//  $ pulumi import aws:securityhub/productSubscription:ProductSubscription example arn:aws:securityhub:eu-west-1:733251395267:product/alertlogic/althreatmanagement,arn:aws:securityhub:eu-west-1:123456789012:product-subscription/alertlogic/althreatmanagement
// ```
type ProductSubscription struct {
	pulumi.CustomResourceState

	// The ARN of a resource that represents your subscription to the product that generates the findings that you want to import into Security Hub.
	Arn pulumi.StringOutput `pulumi:"arn"`
	// The ARN of the product that generates findings that you want to import into Security Hub - see below.
	ProductArn pulumi.StringOutput `pulumi:"productArn"`
}

// NewProductSubscription registers a new resource with the given unique name, arguments, and options.
func NewProductSubscription(ctx *pulumi.Context,
	name string, args *ProductSubscriptionArgs, opts ...pulumi.ResourceOption) (*ProductSubscription, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ProductArn == nil {
		return nil, errors.New("invalid value for required argument 'ProductArn'")
	}
	var resource ProductSubscription
	err := ctx.RegisterResource("aws:securityhub/productSubscription:ProductSubscription", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetProductSubscription gets an existing ProductSubscription resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProductSubscription(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ProductSubscriptionState, opts ...pulumi.ResourceOption) (*ProductSubscription, error) {
	var resource ProductSubscription
	err := ctx.ReadResource("aws:securityhub/productSubscription:ProductSubscription", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ProductSubscription resources.
type productSubscriptionState struct {
	// The ARN of a resource that represents your subscription to the product that generates the findings that you want to import into Security Hub.
	Arn *string `pulumi:"arn"`
	// The ARN of the product that generates findings that you want to import into Security Hub - see below.
	ProductArn *string `pulumi:"productArn"`
}

type ProductSubscriptionState struct {
	// The ARN of a resource that represents your subscription to the product that generates the findings that you want to import into Security Hub.
	Arn pulumi.StringPtrInput
	// The ARN of the product that generates findings that you want to import into Security Hub - see below.
	ProductArn pulumi.StringPtrInput
}

func (ProductSubscriptionState) ElementType() reflect.Type {
	return reflect.TypeOf((*productSubscriptionState)(nil)).Elem()
}

type productSubscriptionArgs struct {
	// The ARN of the product that generates findings that you want to import into Security Hub - see below.
	ProductArn string `pulumi:"productArn"`
}

// The set of arguments for constructing a ProductSubscription resource.
type ProductSubscriptionArgs struct {
	// The ARN of the product that generates findings that you want to import into Security Hub - see below.
	ProductArn pulumi.StringInput
}

func (ProductSubscriptionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*productSubscriptionArgs)(nil)).Elem()
}

type ProductSubscriptionInput interface {
	pulumi.Input

	ToProductSubscriptionOutput() ProductSubscriptionOutput
	ToProductSubscriptionOutputWithContext(ctx context.Context) ProductSubscriptionOutput
}

func (*ProductSubscription) ElementType() reflect.Type {
	return reflect.TypeOf((*ProductSubscription)(nil))
}

func (i *ProductSubscription) ToProductSubscriptionOutput() ProductSubscriptionOutput {
	return i.ToProductSubscriptionOutputWithContext(context.Background())
}

func (i *ProductSubscription) ToProductSubscriptionOutputWithContext(ctx context.Context) ProductSubscriptionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProductSubscriptionOutput)
}

func (i *ProductSubscription) ToProductSubscriptionPtrOutput() ProductSubscriptionPtrOutput {
	return i.ToProductSubscriptionPtrOutputWithContext(context.Background())
}

func (i *ProductSubscription) ToProductSubscriptionPtrOutputWithContext(ctx context.Context) ProductSubscriptionPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProductSubscriptionPtrOutput)
}

type ProductSubscriptionPtrInput interface {
	pulumi.Input

	ToProductSubscriptionPtrOutput() ProductSubscriptionPtrOutput
	ToProductSubscriptionPtrOutputWithContext(ctx context.Context) ProductSubscriptionPtrOutput
}

type productSubscriptionPtrType ProductSubscriptionArgs

func (*productSubscriptionPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**ProductSubscription)(nil))
}

func (i *productSubscriptionPtrType) ToProductSubscriptionPtrOutput() ProductSubscriptionPtrOutput {
	return i.ToProductSubscriptionPtrOutputWithContext(context.Background())
}

func (i *productSubscriptionPtrType) ToProductSubscriptionPtrOutputWithContext(ctx context.Context) ProductSubscriptionPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProductSubscriptionPtrOutput)
}

// ProductSubscriptionArrayInput is an input type that accepts ProductSubscriptionArray and ProductSubscriptionArrayOutput values.
// You can construct a concrete instance of `ProductSubscriptionArrayInput` via:
//
//          ProductSubscriptionArray{ ProductSubscriptionArgs{...} }
type ProductSubscriptionArrayInput interface {
	pulumi.Input

	ToProductSubscriptionArrayOutput() ProductSubscriptionArrayOutput
	ToProductSubscriptionArrayOutputWithContext(context.Context) ProductSubscriptionArrayOutput
}

type ProductSubscriptionArray []ProductSubscriptionInput

func (ProductSubscriptionArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*ProductSubscription)(nil)).Elem()
}

func (i ProductSubscriptionArray) ToProductSubscriptionArrayOutput() ProductSubscriptionArrayOutput {
	return i.ToProductSubscriptionArrayOutputWithContext(context.Background())
}

func (i ProductSubscriptionArray) ToProductSubscriptionArrayOutputWithContext(ctx context.Context) ProductSubscriptionArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProductSubscriptionArrayOutput)
}

// ProductSubscriptionMapInput is an input type that accepts ProductSubscriptionMap and ProductSubscriptionMapOutput values.
// You can construct a concrete instance of `ProductSubscriptionMapInput` via:
//
//          ProductSubscriptionMap{ "key": ProductSubscriptionArgs{...} }
type ProductSubscriptionMapInput interface {
	pulumi.Input

	ToProductSubscriptionMapOutput() ProductSubscriptionMapOutput
	ToProductSubscriptionMapOutputWithContext(context.Context) ProductSubscriptionMapOutput
}

type ProductSubscriptionMap map[string]ProductSubscriptionInput

func (ProductSubscriptionMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*ProductSubscription)(nil)).Elem()
}

func (i ProductSubscriptionMap) ToProductSubscriptionMapOutput() ProductSubscriptionMapOutput {
	return i.ToProductSubscriptionMapOutputWithContext(context.Background())
}

func (i ProductSubscriptionMap) ToProductSubscriptionMapOutputWithContext(ctx context.Context) ProductSubscriptionMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProductSubscriptionMapOutput)
}

type ProductSubscriptionOutput struct{ *pulumi.OutputState }

func (ProductSubscriptionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ProductSubscription)(nil))
}

func (o ProductSubscriptionOutput) ToProductSubscriptionOutput() ProductSubscriptionOutput {
	return o
}

func (o ProductSubscriptionOutput) ToProductSubscriptionOutputWithContext(ctx context.Context) ProductSubscriptionOutput {
	return o
}

func (o ProductSubscriptionOutput) ToProductSubscriptionPtrOutput() ProductSubscriptionPtrOutput {
	return o.ToProductSubscriptionPtrOutputWithContext(context.Background())
}

func (o ProductSubscriptionOutput) ToProductSubscriptionPtrOutputWithContext(ctx context.Context) ProductSubscriptionPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, v ProductSubscription) *ProductSubscription {
		return &v
	}).(ProductSubscriptionPtrOutput)
}

type ProductSubscriptionPtrOutput struct{ *pulumi.OutputState }

func (ProductSubscriptionPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**ProductSubscription)(nil))
}

func (o ProductSubscriptionPtrOutput) ToProductSubscriptionPtrOutput() ProductSubscriptionPtrOutput {
	return o
}

func (o ProductSubscriptionPtrOutput) ToProductSubscriptionPtrOutputWithContext(ctx context.Context) ProductSubscriptionPtrOutput {
	return o
}

func (o ProductSubscriptionPtrOutput) Elem() ProductSubscriptionOutput {
	return o.ApplyT(func(v *ProductSubscription) ProductSubscription {
		if v != nil {
			return *v
		}
		var ret ProductSubscription
		return ret
	}).(ProductSubscriptionOutput)
}

type ProductSubscriptionArrayOutput struct{ *pulumi.OutputState }

func (ProductSubscriptionArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]ProductSubscription)(nil))
}

func (o ProductSubscriptionArrayOutput) ToProductSubscriptionArrayOutput() ProductSubscriptionArrayOutput {
	return o
}

func (o ProductSubscriptionArrayOutput) ToProductSubscriptionArrayOutputWithContext(ctx context.Context) ProductSubscriptionArrayOutput {
	return o
}

func (o ProductSubscriptionArrayOutput) Index(i pulumi.IntInput) ProductSubscriptionOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) ProductSubscription {
		return vs[0].([]ProductSubscription)[vs[1].(int)]
	}).(ProductSubscriptionOutput)
}

type ProductSubscriptionMapOutput struct{ *pulumi.OutputState }

func (ProductSubscriptionMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]ProductSubscription)(nil))
}

func (o ProductSubscriptionMapOutput) ToProductSubscriptionMapOutput() ProductSubscriptionMapOutput {
	return o
}

func (o ProductSubscriptionMapOutput) ToProductSubscriptionMapOutputWithContext(ctx context.Context) ProductSubscriptionMapOutput {
	return o
}

func (o ProductSubscriptionMapOutput) MapIndex(k pulumi.StringInput) ProductSubscriptionOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) ProductSubscription {
		return vs[0].(map[string]ProductSubscription)[vs[1].(string)]
	}).(ProductSubscriptionOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*ProductSubscriptionInput)(nil)).Elem(), &ProductSubscription{})
	pulumi.RegisterInputType(reflect.TypeOf((*ProductSubscriptionPtrInput)(nil)).Elem(), &ProductSubscription{})
	pulumi.RegisterInputType(reflect.TypeOf((*ProductSubscriptionArrayInput)(nil)).Elem(), ProductSubscriptionArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*ProductSubscriptionMapInput)(nil)).Elem(), ProductSubscriptionMap{})
	pulumi.RegisterOutputType(ProductSubscriptionOutput{})
	pulumi.RegisterOutputType(ProductSubscriptionPtrOutput{})
	pulumi.RegisterOutputType(ProductSubscriptionArrayOutput{})
	pulumi.RegisterOutputType(ProductSubscriptionMapOutput{})
}
