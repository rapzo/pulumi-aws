// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package globalaccelerator

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Creates a Global Accelerator accelerator.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v4/go/aws/globalaccelerator"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := globalaccelerator.NewAccelerator(ctx, "example", &globalaccelerator.AcceleratorArgs{
// 			Attributes: &globalaccelerator.AcceleratorAttributesArgs{
// 				FlowLogsEnabled:  pulumi.Bool(true),
// 				FlowLogsS3Bucket: pulumi.String("example-bucket"),
// 				FlowLogsS3Prefix: pulumi.String("flow-logs/"),
// 			},
// 			Enabled:       pulumi.Bool(true),
// 			IpAddressType: pulumi.String("IPV4"),
// 		})
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
// Global Accelerator accelerators can be imported using the `id`, e.g.
//
// ```sh
//  $ pulumi import aws:globalaccelerator/accelerator:Accelerator example arn:aws:globalaccelerator::111111111111:accelerator/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
// ```
type Accelerator struct {
	pulumi.CustomResourceState

	// The attributes of the accelerator. Fields documented below.
	Attributes AcceleratorAttributesPtrOutput `pulumi:"attributes"`
	// The DNS name of the accelerator. For example, `a5d53ff5ee6bca4ce.awsglobalaccelerator.com`.
	// * `hostedZoneId` --  The Global Accelerator Route 53 zone ID that can be used to
	//   route an [Alias Resource Record Set](https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html) to the Global Accelerator. This attribute
	//   is simply an alias for the zone ID `Z2BJ6XQ5FK7U4H`.
	DnsName pulumi.StringOutput `pulumi:"dnsName"`
	// Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`.
	Enabled      pulumi.BoolPtrOutput `pulumi:"enabled"`
	HostedZoneId pulumi.StringOutput  `pulumi:"hostedZoneId"`
	// The value for the address type. Defaults to `IPV4`. Valid values: `IPV4`.
	IpAddressType pulumi.StringPtrOutput `pulumi:"ipAddressType"`
	// IP address set associated with the accelerator.
	IpSets AcceleratorIpSetArrayOutput `pulumi:"ipSets"`
	// The name of the accelerator.
	Name pulumi.StringOutput `pulumi:"name"`
	// A map of tags to assign to the resource. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// A map of tags assigned to the resource, including those inherited from the provider .
	TagsAll pulumi.StringMapOutput `pulumi:"tagsAll"`
}

// NewAccelerator registers a new resource with the given unique name, arguments, and options.
func NewAccelerator(ctx *pulumi.Context,
	name string, args *AcceleratorArgs, opts ...pulumi.ResourceOption) (*Accelerator, error) {
	if args == nil {
		args = &AcceleratorArgs{}
	}

	var resource Accelerator
	err := ctx.RegisterResource("aws:globalaccelerator/accelerator:Accelerator", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAccelerator gets an existing Accelerator resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAccelerator(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AcceleratorState, opts ...pulumi.ResourceOption) (*Accelerator, error) {
	var resource Accelerator
	err := ctx.ReadResource("aws:globalaccelerator/accelerator:Accelerator", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Accelerator resources.
type acceleratorState struct {
	// The attributes of the accelerator. Fields documented below.
	Attributes *AcceleratorAttributes `pulumi:"attributes"`
	// The DNS name of the accelerator. For example, `a5d53ff5ee6bca4ce.awsglobalaccelerator.com`.
	// * `hostedZoneId` --  The Global Accelerator Route 53 zone ID that can be used to
	//   route an [Alias Resource Record Set](https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html) to the Global Accelerator. This attribute
	//   is simply an alias for the zone ID `Z2BJ6XQ5FK7U4H`.
	DnsName *string `pulumi:"dnsName"`
	// Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`.
	Enabled      *bool   `pulumi:"enabled"`
	HostedZoneId *string `pulumi:"hostedZoneId"`
	// The value for the address type. Defaults to `IPV4`. Valid values: `IPV4`.
	IpAddressType *string `pulumi:"ipAddressType"`
	// IP address set associated with the accelerator.
	IpSets []AcceleratorIpSet `pulumi:"ipSets"`
	// The name of the accelerator.
	Name *string `pulumi:"name"`
	// A map of tags to assign to the resource. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
	Tags map[string]string `pulumi:"tags"`
	// A map of tags assigned to the resource, including those inherited from the provider .
	TagsAll map[string]string `pulumi:"tagsAll"`
}

type AcceleratorState struct {
	// The attributes of the accelerator. Fields documented below.
	Attributes AcceleratorAttributesPtrInput
	// The DNS name of the accelerator. For example, `a5d53ff5ee6bca4ce.awsglobalaccelerator.com`.
	// * `hostedZoneId` --  The Global Accelerator Route 53 zone ID that can be used to
	//   route an [Alias Resource Record Set](https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html) to the Global Accelerator. This attribute
	//   is simply an alias for the zone ID `Z2BJ6XQ5FK7U4H`.
	DnsName pulumi.StringPtrInput
	// Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`.
	Enabled      pulumi.BoolPtrInput
	HostedZoneId pulumi.StringPtrInput
	// The value for the address type. Defaults to `IPV4`. Valid values: `IPV4`.
	IpAddressType pulumi.StringPtrInput
	// IP address set associated with the accelerator.
	IpSets AcceleratorIpSetArrayInput
	// The name of the accelerator.
	Name pulumi.StringPtrInput
	// A map of tags to assign to the resource. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
	Tags pulumi.StringMapInput
	// A map of tags assigned to the resource, including those inherited from the provider .
	TagsAll pulumi.StringMapInput
}

func (AcceleratorState) ElementType() reflect.Type {
	return reflect.TypeOf((*acceleratorState)(nil)).Elem()
}

type acceleratorArgs struct {
	// The attributes of the accelerator. Fields documented below.
	Attributes *AcceleratorAttributes `pulumi:"attributes"`
	// Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`.
	Enabled *bool `pulumi:"enabled"`
	// The value for the address type. Defaults to `IPV4`. Valid values: `IPV4`.
	IpAddressType *string `pulumi:"ipAddressType"`
	// The name of the accelerator.
	Name *string `pulumi:"name"`
	// A map of tags to assign to the resource. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Accelerator resource.
type AcceleratorArgs struct {
	// The attributes of the accelerator. Fields documented below.
	Attributes AcceleratorAttributesPtrInput
	// Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`.
	Enabled pulumi.BoolPtrInput
	// The value for the address type. Defaults to `IPV4`. Valid values: `IPV4`.
	IpAddressType pulumi.StringPtrInput
	// The name of the accelerator.
	Name pulumi.StringPtrInput
	// A map of tags to assign to the resource. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
	Tags pulumi.StringMapInput
}

func (AcceleratorArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*acceleratorArgs)(nil)).Elem()
}

type AcceleratorInput interface {
	pulumi.Input

	ToAcceleratorOutput() AcceleratorOutput
	ToAcceleratorOutputWithContext(ctx context.Context) AcceleratorOutput
}

func (*Accelerator) ElementType() reflect.Type {
	return reflect.TypeOf((*Accelerator)(nil))
}

func (i *Accelerator) ToAcceleratorOutput() AcceleratorOutput {
	return i.ToAcceleratorOutputWithContext(context.Background())
}

func (i *Accelerator) ToAcceleratorOutputWithContext(ctx context.Context) AcceleratorOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AcceleratorOutput)
}

func (i *Accelerator) ToAcceleratorPtrOutput() AcceleratorPtrOutput {
	return i.ToAcceleratorPtrOutputWithContext(context.Background())
}

func (i *Accelerator) ToAcceleratorPtrOutputWithContext(ctx context.Context) AcceleratorPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AcceleratorPtrOutput)
}

type AcceleratorPtrInput interface {
	pulumi.Input

	ToAcceleratorPtrOutput() AcceleratorPtrOutput
	ToAcceleratorPtrOutputWithContext(ctx context.Context) AcceleratorPtrOutput
}

type acceleratorPtrType AcceleratorArgs

func (*acceleratorPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**Accelerator)(nil))
}

func (i *acceleratorPtrType) ToAcceleratorPtrOutput() AcceleratorPtrOutput {
	return i.ToAcceleratorPtrOutputWithContext(context.Background())
}

func (i *acceleratorPtrType) ToAcceleratorPtrOutputWithContext(ctx context.Context) AcceleratorPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AcceleratorPtrOutput)
}

// AcceleratorArrayInput is an input type that accepts AcceleratorArray and AcceleratorArrayOutput values.
// You can construct a concrete instance of `AcceleratorArrayInput` via:
//
//          AcceleratorArray{ AcceleratorArgs{...} }
type AcceleratorArrayInput interface {
	pulumi.Input

	ToAcceleratorArrayOutput() AcceleratorArrayOutput
	ToAcceleratorArrayOutputWithContext(context.Context) AcceleratorArrayOutput
}

type AcceleratorArray []AcceleratorInput

func (AcceleratorArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Accelerator)(nil)).Elem()
}

func (i AcceleratorArray) ToAcceleratorArrayOutput() AcceleratorArrayOutput {
	return i.ToAcceleratorArrayOutputWithContext(context.Background())
}

func (i AcceleratorArray) ToAcceleratorArrayOutputWithContext(ctx context.Context) AcceleratorArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AcceleratorArrayOutput)
}

// AcceleratorMapInput is an input type that accepts AcceleratorMap and AcceleratorMapOutput values.
// You can construct a concrete instance of `AcceleratorMapInput` via:
//
//          AcceleratorMap{ "key": AcceleratorArgs{...} }
type AcceleratorMapInput interface {
	pulumi.Input

	ToAcceleratorMapOutput() AcceleratorMapOutput
	ToAcceleratorMapOutputWithContext(context.Context) AcceleratorMapOutput
}

type AcceleratorMap map[string]AcceleratorInput

func (AcceleratorMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Accelerator)(nil)).Elem()
}

func (i AcceleratorMap) ToAcceleratorMapOutput() AcceleratorMapOutput {
	return i.ToAcceleratorMapOutputWithContext(context.Background())
}

func (i AcceleratorMap) ToAcceleratorMapOutputWithContext(ctx context.Context) AcceleratorMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AcceleratorMapOutput)
}

type AcceleratorOutput struct{ *pulumi.OutputState }

func (AcceleratorOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Accelerator)(nil))
}

func (o AcceleratorOutput) ToAcceleratorOutput() AcceleratorOutput {
	return o
}

func (o AcceleratorOutput) ToAcceleratorOutputWithContext(ctx context.Context) AcceleratorOutput {
	return o
}

func (o AcceleratorOutput) ToAcceleratorPtrOutput() AcceleratorPtrOutput {
	return o.ToAcceleratorPtrOutputWithContext(context.Background())
}

func (o AcceleratorOutput) ToAcceleratorPtrOutputWithContext(ctx context.Context) AcceleratorPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, v Accelerator) *Accelerator {
		return &v
	}).(AcceleratorPtrOutput)
}

type AcceleratorPtrOutput struct{ *pulumi.OutputState }

func (AcceleratorPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Accelerator)(nil))
}

func (o AcceleratorPtrOutput) ToAcceleratorPtrOutput() AcceleratorPtrOutput {
	return o
}

func (o AcceleratorPtrOutput) ToAcceleratorPtrOutputWithContext(ctx context.Context) AcceleratorPtrOutput {
	return o
}

func (o AcceleratorPtrOutput) Elem() AcceleratorOutput {
	return o.ApplyT(func(v *Accelerator) Accelerator {
		if v != nil {
			return *v
		}
		var ret Accelerator
		return ret
	}).(AcceleratorOutput)
}

type AcceleratorArrayOutput struct{ *pulumi.OutputState }

func (AcceleratorArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]Accelerator)(nil))
}

func (o AcceleratorArrayOutput) ToAcceleratorArrayOutput() AcceleratorArrayOutput {
	return o
}

func (o AcceleratorArrayOutput) ToAcceleratorArrayOutputWithContext(ctx context.Context) AcceleratorArrayOutput {
	return o
}

func (o AcceleratorArrayOutput) Index(i pulumi.IntInput) AcceleratorOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) Accelerator {
		return vs[0].([]Accelerator)[vs[1].(int)]
	}).(AcceleratorOutput)
}

type AcceleratorMapOutput struct{ *pulumi.OutputState }

func (AcceleratorMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]Accelerator)(nil))
}

func (o AcceleratorMapOutput) ToAcceleratorMapOutput() AcceleratorMapOutput {
	return o
}

func (o AcceleratorMapOutput) ToAcceleratorMapOutputWithContext(ctx context.Context) AcceleratorMapOutput {
	return o
}

func (o AcceleratorMapOutput) MapIndex(k pulumi.StringInput) AcceleratorOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) Accelerator {
		return vs[0].(map[string]Accelerator)[vs[1].(string)]
	}).(AcceleratorOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*AcceleratorInput)(nil)).Elem(), &Accelerator{})
	pulumi.RegisterInputType(reflect.TypeOf((*AcceleratorPtrInput)(nil)).Elem(), &Accelerator{})
	pulumi.RegisterInputType(reflect.TypeOf((*AcceleratorArrayInput)(nil)).Elem(), AcceleratorArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*AcceleratorMapInput)(nil)).Elem(), AcceleratorMap{})
	pulumi.RegisterOutputType(AcceleratorOutput{})
	pulumi.RegisterOutputType(AcceleratorPtrOutput{})
	pulumi.RegisterOutputType(AcceleratorArrayOutput{})
	pulumi.RegisterOutputType(AcceleratorMapOutput{})
}
